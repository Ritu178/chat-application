import SideBar from "@/components/chat/sideBar";
import ChatMessages from "@/components/chat/chatMessages";
const Main = () => {
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <SideBar />
          <ChatMessages />
        </div>
      </div>
    </>
  );
};
export default Main;
