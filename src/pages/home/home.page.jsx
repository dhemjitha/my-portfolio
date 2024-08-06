import { Separator } from "@/components/ui/separator";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Project from "@/components/shared/project";

function HomePage() {
  return (
    <main className="py-5">
      <div>
        <h1 className="font-semibold">Aspiring Full Stack Developer</h1>
        <h1>ReactJS | ExpressJS | NodeJS | TypeScript</h1>
      </div>
      <div className="py-5">
        <Separator />
        <div className="py-5">
          <h1 className="font-semibold text-gray-500">Stay Connected!</h1>
          <div className="flex space-x-6 mt-4">
            <SocialIcon
              url="https://github.com/dhemjitha"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              url="https://www.facebook.com/dulran.hemjitha.1?mibextid=LQQJ4d"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              network="x"
              url="https://x.com/dhemjitha"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              url="https://www.youtube.com/@dhemjitha"
              style={{ height: 32, width: 32 }}
            />
          </div>
        </div>
        <Separator />
            <Project/>
        <Separator />

        <div className="py-5">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
          <p className="mt-4">
            Feel free to contact me via email or reach out to me on my personal
            number:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-5">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:dhemjitha@gmail.com" className="text-blue-500">
                dhemjitha@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-5">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+94 78 629 5820" className="text-blue-500">
                +94 78 629 5820
              </a>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}

export default HomePage;
