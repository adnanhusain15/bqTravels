import Section from "@/components/Section";
import React, { FC } from "react";

const RefundPolicy: FC = () => {
  return (
    <Section containerClassName="flex flex-col gap-4">
      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-md p-8">
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Cancellation &amp; Refund Policy
        </p>
        <div className="h-1 w-32 bg-blue-600 mb-4"></div>
        <p className="text-sm text-gray-600 mb-6">
          Last updated on Sep 16th 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <p>
            B Q TOURS AND TRAVELS believes in helping its customers as far as
            possible, and has therefore a liberal cancellation policy. Under
            this policy:
          </p>

          <ul className="space-y-4 list-disc pl-6">
            <li>
              <p>
                Cancellations will be considered only if the request is made
                within 1-2 days of placing the order. However, the cancellation
                request may not be entertained if the orders have been
                communicated to the vendors/merchants and they have initiated
                the process of shipping them.
              </p>
            </li>
            <li>
              <p>
                B Q TOURS AND TRAVELS does not accept cancellation requests for
                perishable items like flowers, eatables etc. However,
                refund/replacement can be made if the customer establishes that
                the quality of product delivered is not good.
              </p>
            </li>
            <li>
              <p>
                In case of receipt of damaged or defective items please report
                the same to our Customer Service team. The request will,
                however, be entertained once the merchant has checked and
                determined the same at his own end. This should be reported
                within 1-2 days of receipt of the products.
              </p>
            </li>
            <li>
              <p>
                In case you feel that the product received is not as shown on
                the site or as per your expectations, you must bring it to the
                notice of our customer service within 1-2 days of receiving the
                product. The Customer Service Team after looking into your
                complaint will take an appropriate decision.
              </p>
            </li>
            <li>
              <p>
                In case of complaints regarding products that come with a
                warranty from manufacturers, please refer the issue to them.
              </p>
            </li>
            <li>
              <p>
                In case of any Refunds approved by the B Q TOURS AND TRAVELS,
                it&apos;ll take 9-15 days for the refund to be processed to the
                end customer.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default RefundPolicy;
