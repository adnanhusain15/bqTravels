"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { appConstants } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

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
});

const fields: {
  name: keyof z.infer<typeof FormSchema>;
  label: string;
  placeholder?: string;
  multiple?: boolean;
  options?: string[];
}[] = [
  { name: "name", label: "Name", placeholder: "Type in your name" },
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
    },
  });

  const { toast } = useToast();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "Thank you for showing interest. We will get back to you soon!",
      className: "bg-green-600 text-white",
      duration: 4000,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        {fields.map((item) => {
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

//AIzaSyCuHnGf18LubOfSd7Ie8blUqHP50DBHNGM
