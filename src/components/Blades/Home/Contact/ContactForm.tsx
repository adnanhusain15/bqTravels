"use client";
import { Button } from "@/components/ui/button";

import ReCAPTCHA from "react-google-recaptcha";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { appConstants } from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
interface IContactFormProps {}
const FormSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Required.",
  }),
  email: z.string().trim().email("Invalid").min(2, {
    message: "Required.",
  }),
  phone: z.string().trim().min(2, {
    message: "Required.",
  }),
  message: z.string().trim(),
  service: z.string().trim().min(1, "Required"),
  country: z.string().trim().optional(),
});

const fields: {
  name: keyof z.infer<typeof FormSchema>;
  label: string;
  placeholder?: string;
  multiple?: boolean;
  options?: string[];
  hidden?: boolean;
}[] = [
  { name: "name", label: "Name", placeholder: "Type in your name" },
  {
    name: "country",
    label: "Country",
    placeholder: "Select a country",
    hidden: true,
  },
  { name: "email", label: "Email", placeholder: "email@website.com" },
  { name: "phone", label: "Contact No", placeholder: "555-555-5555" },
  {
    name: "service",
    label: "Services",
    options: appConstants.services.map((o) => o.title),
  },
  {
    name: "message",
    label: "Message",
    multiple: true,
    placeholder: "Send a message to our team....",
  },
];
const ContactForm: FC<IContactFormProps> = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      service: "",
    },
  });

  const { toast } = useToast();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (data.country) return;
      // @ts-expect-error - grecaptcha is not defined in the global scope
      const token: string = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, token }),
      });
      await response.json();

      toast({
        title: "Thank you for showing interest. We will get back to you soon!",
        className: "bg-green-600 text-white",
        duration: 4000,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        {fields.map((item) => {
          if (item.hidden)
            return (
              <input
                key={item.name}
                style={{ display: "none" }}
                name={item.name}
                onChange={(e) => {
                  form.setValue(item.name, e.target.value);
                }}
                value={form.getValues(item.name) || ""}
              />
            );
          return (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{item.label}</FormLabel>
                  {item.options?.length ? (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {item.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <FormControl>
                      {item.multiple ? (
                        <Textarea
                          className="rounded-sm"
                          placeholder={item.placeholder}
                          {...field}
                        />
                      ) : (
                        <Input
                          className="rounded-sm"
                          placeholder={item.placeholder}
                          {...field}
                        />
                      )}
                    </FormControl>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
          size="invisible"
        />
        <Button
          className="w-full"
          size={"lg"}
          //   color="primary"
          //   variant={"outline"}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
