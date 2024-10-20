// as we see here we have to destructure and add more attributte names we need to use forward props/Proxy props
export default function Section({title,children,...props}){
    return (
        //here props are not forwarded automatically
        //Props must be used & set explicitly
       <section {...props} >
        <h2>{title}
        </h2>
        {children}
       </section>
    );
}