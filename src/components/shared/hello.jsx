import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Hello() {
  return (
    <main>
      <div className="py-6">
        <Avatar>
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720128085923?e=1735171200&v=beta&t=flvEb17uYxmTNmJVPPL9xI8rU8_cS8F98cYCJ-JJl1U" />
        </Avatar>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Hello, I'm Dulran</h1>
      </div>
    </main>
  );
}

export default Hello;
