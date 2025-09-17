import Section from "@/components/Section";
import React, { FC } from "react";

const TermsAndCondition: FC = () => {
  return (
    <Section containerClassName="flex flex-col gap-4 ">
      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-md p-8">
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Terms &amp; Conditions
        </p>
        <div className="h-1 w-32 bg-blue-600 mb-4"></div>
        <p className="text-sm text-gray-600 mb-6">
          Last updated on Sep 16th 2025
        </p>
        <div className="text-gray-700 mb-6">
          For the purpose of these Terms and Conditions, The term
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot; used anywhere on this
          page shall mean B Q TOURS AND TRAVELS, whose registered/operational
          office is
          <address className="my-4 not-italic">
            Flat No. 402, Sukun Residency, Gorewada Road,
            <br />
            Opp. Dinshaw Factory, Patel Nagar,
            <br />
            Nagpur, Maharashtra, 440013
            <br />
            Katolroad
            <br />
            MAHARASHTRA
            <br />
            440013
          </address>
          . &quot;you&quot;, &quot;your&quot;, &quot;user&quot;,
          &quot;visitor&quot; shall mean any natural or legal person who is
          visiting our website and/or agreed to purchase from us.
        </div>
        <p className="text-gray-700 font-semibold mb-6">
          <strong>
            Your use of the website and/or purchase from us are governed by
            following Terms and Conditions:
          </strong>
        </p>
        <ul className="space-y-6 list-disc pl-6">
          <li className="text-gray-700">
            <p className="text-gray-700">
              The content of the pages of this website is subject to change
              without notice.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              Your use of any information or materials on our website and/or
              product pages is entirely at your own risk, for which we shall not
              be liable. It shall be your own responsibility to ensure that any
              products, services or information available through our website
              and/or product pages meet your specific requirements.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              Our website contains material which is owned by or licensed to us.
              This material includes, but are not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              All trademarks reproduced in our website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              Unauthorized use of information provided by us shall give rise to
              a claim for damages and/or be a criminal offense.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              From time to time our website may also include links to other
              websites. These links are provided for your convenience to provide
              further information.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              You may not create a link to our website from another website or
              document without B Q TOURS AND TRAVELS&apos;s prior written
              consent.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              Any dispute arising out of use of our website and/or purchase with
              us and/or any engagement with us is subject to the laws of India.
            </p>
          </li>
          <li className="text-gray-700">
            <p className="text-gray-700">
              We, shall be under no liability whatsoever in respect of any loss
              or damage arising directly or indirectly out of the decline of
              authorization for any Transaction, on Account of the Cardholder
              having exceeded the preset limit mutually agreed by us with our
              acquiring bank from time to time
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default TermsAndCondition;
