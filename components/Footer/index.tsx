import { FunctionComponent } from "react"

const Footer: FunctionComponent = ({}) => {
  return (
    <footer className={"bg-secondary"}>
      <div className={"w-full h-10 flex flex-col justify-center items-center"}>
        {["Made with lots of <3", "© 2022"].map((text, index) => (
          <p key={index} className={"text-slate-50/75 font-sans text-xs"}>
            {text}
          </p>
        ))}
      </div>
    </footer>
  );
}

export default Footer