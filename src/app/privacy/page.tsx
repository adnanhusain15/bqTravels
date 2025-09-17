import Section from "@/components/Section";
import { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <Section containerClassName="flex flex-col gap-4 ">
      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-md p-8">
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Privacy Policy
        </p>
        <div className="h-1 w-32 bg-blue-600 mb-4"></div>
        <p className="text-sm text-gray-600 mb-6">
          Last updated on Sep 16th 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <p>
            This privacy policy sets out how B Q TOURS AND TRAVELS uses and
            protects any information that you give B Q TOURS AND TRAVELS when
            you visit their website and/or agree to purchase from them.
          </p>

          <p>
            B Q TOURS AND TRAVELS is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, and then you can be
            assured that it will only be used in accordance with this privacy
            statement.
          </p>

          <p>
            B Q TOURS AND TRAVELS may change this policy from time to time by
            updating this page. You should check this page from time to time to
            ensure that you adhere to these changes.
          </p>

          <div>
            <p className="font-semibold mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Contact information including email address</li>
              <li>
                Demographic information such as postcode, preferences and
                interests, if required
              </li>
              <li>
                Other information relevant to customer surveys and/or offers
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">
              What we do with the information we gather
            </p>
            <p className="mb-4">
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internal record keeping.</li>
              <li>
                We may use the information to improve our products and services.
              </li>
              <li>
                We may periodically send promotional emails about new products,
                special offers or other information which we think you may find
                interesting using the email address which you have provided.
              </li>
              <li>
                From time to time, we may also use your information to contact
                you for market research purposes. We may contact you by email,
                phone, fax or mail. We may use the information to customise the
                website according to your interests.
              </li>
            </ul>
          </div>

          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure we have put in
            suitable measures.
          </p>

          <div>
            <p className="font-semibold mb-4">How we use cookies</p>
            <p>
              A cookie is a small file which asks permission to be placed on
              your computer&apos;s hard drive. Once you agree, the file is added
              and the cookie helps analyze web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.
            </p>

            <p className="mt-4">
              We use traffic log cookies to identify which pages are being used.
              This helps us analyze data about webpage traffic and improve our
              website in order to tailor it to customer needs. We only use this
              information for statistical analysis purposes and then the data is
              removed from the system.
            </p>

            <p className="mt-4">
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us.
            </p>

            <p className="mt-4">
              You can choose to accept or decline cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. This may prevent
              you from taking full advantage of the website.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">
              Controlling your personal information
            </p>
            <p className="mb-4">
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                whenever you are asked to fill in a form on the website, look
                for the box that you can click to indicate that you do not want
                the information to be used by anybody for direct marketing
                purposes
              </li>
              <li>
                if you have previously agreed to us using your personal
                information for direct marketing purposes, you may change your
                mind at any time by writing to or emailing us at
              </li>
            </ul>
          </div>

          <p>
            We will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </p>

          <p>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to Flat No. 402, Sukun
            Residency, Gorewada Road, Opp. Dinshaw Factory, Patel Nagar, Nagpur,
            Nagpur, Maharashtra, 440013 Katolroad MAHARASHTRA 440013 . or
            contact us at or as soon as possible. We will promptly correct any
            information found to be incorrect.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;
