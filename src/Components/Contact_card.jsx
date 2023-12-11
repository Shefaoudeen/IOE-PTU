const Contact_card = (props) => {
  return (
    <div
      className="bg-gradient-to-tr from-white to-slate-100 border-2 drop-shadow-lg flex-1 items-center flex w-[400px] 
    transition hover:scale-90 delay-[50] cursor-pointer
    h-[150px] rounded-br-3xl rounded-tl-3xl"
    >
      <div className="w-[30%] items-center bg-gray-200 flex justify-center h-[100%] rounded-tl-3xl">
        <img src={props.Icon} width={50} />
      </div>
      <div className="pl-3 flex justify-start flex-col w-[70%]">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="font-semibold">{props.Description}</p>
      </div>
    </div>
  );
};

export default Contact_card;
