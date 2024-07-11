export default function Tabs({children,buttons,ButtonContainer = 'menu'}){
    return(
        <> 
         <ButtonContainer>{buttons}</ButtonContainer>
        {children}
        </>
    )
}

/*ButtonContainer = 'menu' is used instead of 
<Tabs ButtonContainer = "menu" in the section component  */
