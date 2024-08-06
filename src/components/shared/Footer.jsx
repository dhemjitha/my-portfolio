import { Avatar, AvatarImage } from "../ui/avatar2";
import { Separator } from "../ui/separator";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <main className="py-5">
      <div className="mt-8 py-4">
        <Separator />
      </div>
      <Avatar>
        <AvatarImage src="https://media.licdn.com/dms/image/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_800_800/0/1720128085923?e=1728518400&v=beta&t=K4Fcq0Q0ncNvPVbsIG2WEDBVr9c9jEG2i06I5zof8k0" />
      </Avatar>
      <div className="mt-3">
        <h1 className="font-extrabold">Dulran Hemjitha</h1>
      </div>
        <div className="py-5">
          <div className="flex space-x-6 mt-0">
            <SocialIcon
              url="https://github.com/dhemjitha"
              style={{ height: 28, width: 28 }}
            />
            <SocialIcon
              url="https://www.facebook.com/dulran.hemjitha.1?mibextid=LQQJ4d"
              style={{ height: 28, width: 28 }}
            />
            <SocialIcon
              network="x"
              url="https://x.com/dhemjitha"
              style={{ height: 28, width: 28 }}
            />
            <SocialIcon
              url="https://www.youtube.com/@dhemjitha"
              style={{ height: 28, width: 28 }}
            />
          </div>
        </div>
        
    </main>
  );
}

export default Footer;
