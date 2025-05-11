import Subtitle from "./subtitle";
import ContactDetails from "./contact-details";

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="mx-[2.6rem] mb-[7rem] md:mx-[5rem] xl:mx-[20%]"
    >
      <Subtitle subtitle="Contact Me"></Subtitle>
      <ContactDetails
        href="tel:+972538234329"
        src="/phone.svg"
        alt="call me"
        resource="+972-53-823-4329"
      ></ContactDetails>
      <ContactDetails
        href="https://wa.me/972538234329"
        src="/whatsapp.svg"
        alt="message me"
        resource="+972-53-823-4329"
      ></ContactDetails>
      <ContactDetails
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rephael4321@gmail.com&su=&body="
        src="/email.svg"
        alt="email me"
        resource="rephael4321@gmail.com"
      ></ContactDetails>
      <ContactDetails
        href="https://linkedin.com/in/rephael-sintes-833177196"
        src="/linked-in.svg"
        alt="linkedin profile"
        resource="LinkedIn"
      ></ContactDetails>
    </section>
  );
}
