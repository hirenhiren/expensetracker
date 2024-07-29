import { forwardRef } from "react";

const Card = forwardRef(({children, ...props}, ref) =>{
    return(
        <div {...props} ref={ref} className="text-[#052f5f] mt-8 bg-[#cad7fe] p-4 shadow-lg shadow-stone-500/50">
            {children}
        </div>
    );
})

export default Card