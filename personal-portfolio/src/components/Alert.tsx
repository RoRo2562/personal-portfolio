const Alert = ({ type, text }:{type:string,text:string}) => {
    return (
      <div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
        <div
          className={`p-2 ${
            type === 'danger' ? 'bg-[#e63946]' : 'bg-[#457b9d]'
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
          role="alert">
          <p
            className={`flex rounded-full ${
              type === 'danger' ? 'bg-[#e63946]' : 'bg-[#a8dadc]'
            } uppercase px-2 py-1 text-xs font-semibold mr-3 text-black`}>
            {type === 'danger' ? 'Failed' : 'Success'}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Alert;