import React from "react";
import { Cookie, CookieHolder } from "./Cookies.styles";
import { Container } from "src/components/Container.styles";

const Cookies = () => {
  return (
    <CookieHolder>
      <Container>
        <Cookie>
          <div>
            <h2>What Are Cookies?</h2>
            <p>
              As it is the common practice with almost all professional websites
              this site also uses cookies, which are tiny files that are
              downloaded to your computer to improve your experience. This page
              describes what information they gather, how we use it and why we
              sometimes need to store these cookies. We will also share how you
              can prevent these cookies from being stored. However, this may
              downgrade or ‘break’ certain elements of the site’s
              functionality.Our cookies are created when you (user) load our
              InvoZone website onto your browser. Our website sends information
              to the browser which then creates the file we talked about above.
              Every time you visit our website, your browser takes this file and
              sends it to our website server. These cookies are not only created
              by our website, but they are also created by the services that we
              are using, which includes widgets, ads (if there are any),
              plugins, or other elements on the website pages.
            </p>
          </div>
          <div>
            <h2>How We Use Cookies?</h2>
            <p>
              We use cookies for a variety of reasons detailed below.
              Unfortunately, in most cases, there are no industry standard
              options for disabling cookies without completely disabling the
              functionality and features they added to this site. It is
              recommended that you leave it on for all cookies if you are not
              sure whether you need them or not, in case they are used to
              provide a service that you use.
            </p>
          </div>
          <div>
            <h2>Disabling Cookies</h2>
            <p className="info">
              Most web browsers allow you to manage your cookie preferences. You
              can set your browser to refuse cookies, or delete certain cookies.
              Generally, you should also be able to manage similar technologies
              in the same way that you manage cookies – using your browser’s
              preferences. The following links show how to adjust the browser
              settings of commonly used browsers:
            </p>
            <ul>
              <li>Chrome</li>
              <li>Firefox</li>
              <li>safari</li>
              <li>Internet explorer</li>
            </ul>
            <p>
              You can prevent the setting of cookies by adjusting the settings
              on your browser. Be aware that disabling cookies will affect the
              functionality of this and many other websites that you visit.
              Disabling cookies will also result in disabling certain
              functionality and features of this site. Therefore it is
              recommended that you do not disable cookies.
            </p>
          </div>
          <div>
            <h2>Third-Party Cookies</h2>
            <p className="info">
              We make use of third-party services to collect other relevant
              information that provides analysis, research and audit reports.
              These third-party cookies may use pixel tags or logs and they may
              also set and analyse cookies on your computer or other devices.The
              following section details which third party cookies you might
              encounter through this site.
            </p>
            <ul>
              <li>
                This site uses Google Analytics, which is one of the most
                widespread and trusted analytics solutions on the web for
                helping us to understand how you use the site and ways that we
                can improve your experience. These cookies may track things such
                as how long you spend on the site and the pages that you visit
                so we can continue to produce engaging content. For more
                information on Google Analytics cookies, see the official Google
                Analytics page. You can choose to opt-out of Google Analytics by
                clicking on this link.
              </li>
              <li>
                Third-party analytics are used to track and measure usage of
                this site so that we can continue to produce engaging content.
                These cookies may track things such as how long you spend on the
                site or pages you visit which helps us to understand how we can
                improve the site for you.
              </li>
              <li>
                From time to time we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features these cookies may be used to ensure that you
                receive a consistent experience on the site whilst ensuring to
                understand which optimisations our users appreciate the most.
              </li>
              <li>
                We may also use social media buttons and/or plugins on this site
                that allow you to connect with your social network in various
                ways. For these to work the following social media sites
                including; Facebook, Twitter, LinkedIn, will set cookies through
                our site which may be used to enhance your profile on their site
                or contribute to the data they hold for various purposes
                outlined in their respective privacy policies.
              </li>
              <li>
                Please note that by not clicking on these buttons/plugins do not
                ensure that they have not collected your information, such as
                your IP address and the pages you view. Also, they may set
                and/or access cookies. These plugins are solely governed by the
                privacy policy of their respective companies and InvoZone cannot
                be held accountable for their use of information.
              </li>
            </ul>
          </div>
        </Cookie>
      </Container>
    </CookieHolder>
  );
};

export default Cookies;
