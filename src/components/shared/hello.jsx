import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Hello() {
  return (
    <main>
      <div className="py-6">
        <Avatar>
          <AvatarImage src="https://media.licdn.com/dms/image/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_800_800/0/1720128085923?e=1728518400&v=beta&t=K4Fcq0Q0ncNvPVbsIG2WEDBVr9c9jEG2i06I5zof8k0" />
        </Avatar>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Hello, I'm Dulran</h1>
      </div>
    </main>
  );
}

export default Hello;
