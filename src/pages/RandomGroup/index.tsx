import { useState } from "react";
import InputChip, { Chip } from "../../components/Input/InputChip";
import { randomGroup } from "../../helper/random";

export type Group = {
   [key: string]: string[];
};

const RandomGroupPage = () => {
   const [randomResult, setRandomResult] = useState<Group>({});
   const [members, setMembers] = useState<Chip[]>([]);
   const [groups, setGroups] = useState<Chip[]>([]);

   const handleGenerate = () => {
      const groupNames = groups.map((group) => group.label);
      const memberNames = members.map((member) => member.label);
      setRandomResult(randomGroup(memberNames, groupNames));
   };

   return (
      <div className="w-full h-full flex flex-col gap-4 rounded-2xl text-primary">
         <div className="flex flex-col gap-4">
            <span className="flex justify-between items-center">
               <h1 className="text-2xl font-medium">Group Generator</h1>
            </span>
            <hr className="border-lightgray" />
         </div>

         <div className="w-full flex gap-10">
            <div className="w-full h-full flex flex-col gap-2">
               <h2 className="flex items-center gap-2 text-xl">
                  <i className="fa-solid fa-user-group"></i>Group
               </h2>
               <div className="h-[296px] border-2 border-chinese-silver rounded-md p-3 overflow-y-auto">
                  <InputChip addChips={setGroups} />
               </div>
            </div>
            <div className="w-full h-full flex flex-col gap-2">
               <h2 className="flex items-center gap-2 text-xl">
                  <i className="fa-solid fa-user"></i>Member
               </h2>
               <div className="h-[296px] border-2 border-chinese-silver rounded-md p-3 overflow-y-auto">
                  <InputChip addChips={setMembers} />
               </div>
            </div>
         </div>
         <div className="flex justify-center gap-3 mt-7">
            <button
               className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
               form="group-form"
               type="submit"
               onClick={handleGenerate}
            >
               <i className="fa-solid fa-shuffle"></i>
               Generate
            </button>
            <button
               className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
               form="group-form"
               type="submit"
            >
               <i className="fa-solid fa-eye"></i>
               View Result
            </button>
            <button
               className="flex items-center gap-2 border border-chinese-silver py-1 px-2 rounded-md"
               form="group-form"
               type="button"
            >
               <i className="fa-solid fa-trash-can"></i>
               Discard
            </button>
         </div>
      </div>
   );
};

export default RandomGroupPage;
