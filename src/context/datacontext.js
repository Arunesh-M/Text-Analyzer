import { createContext,useState,useEffect } from "react";

const DataContext=createContext({});

export const DataProvider=({children})=>{
    
  const[text,setText]=useState("");
  const[words,setWords]=useState(0);
  const[characters,setCharacters]=useState(0);
  const [pro,setPro]=useState(0);
  const [para,setPara]=useState(0);
  const [sent,setSent]=useState(0)
  const [read,setRead]=useState("-")
  const [long,setLong]=useState("-")

  useEffect(()=>{
    
    const countChar=()=>{
      let remove=text.replace(/\s/g,"")
      setCharacters(remove.length)
    }

    const countWord=()=>{
        let split=text.split(/\s+/)
        setWords(split.length-1) 
    }

    const countPro=()=>{
      let pronouns = ['i','we','you','he','she','it','they','me','us','her','him','them','mine','ours','yours','hers','his','theirs','myself','yourself','herself','himself','itself','ourselves','yourselves','themselves',]
      let split=text.split(/\s+/)
      let split1=split.map((item)=>item.toLowerCase()).filter((item)=>pronouns.includes(item))
      setPro(split1.length)
    }

    const countRead=()=>{
     if(characters>0){
      let length=characters
      let counter=0;
      for(let i=0;i<=length;i++){
        if(i%800===0){  
          counter++
        }
      }
      setRead(counter) 
     }
    }

    const longWord=()=>{
      if(characters>0){
        let replace1=text.replace(/\./," ");
        let replace2=replace1.replace(/\?/," ");
        let replace3=replace2.replace(/:/," ");
        let replace4=replace3.replace(/;/," ");
        let replace5=replace4.replace(/,/," ");
        let replace6=replace5.replace(/!/," ")
        let split=replace6.split(/\s+/).sort((a,b)=>b.length-a.length)
        setLong(split[0])
      }
    }

    const countpara=()=>{
        let count=text.replace(/\n$/gm, '').split(/\n/).length
        setPara(count)   
    }

    const countsent=()=>{
      let result=text.split(/[.]/gi);
      let count=result.filter((item)=>item!=="");
      setSent(count.length)
    }

    const valueSet=()=>{
      if(text.length===0){
        setPara(0)
        setRead("-")
      }
    }

    countChar()
    countWord()
    countPro()
    countRead()
    longWord()
    countpara()
    countsent()
    valueSet()

    },[text,characters])
    
    return(
        <DataContext.Provider value={{
            words,characters,pro,para,sent,
            text,setText,
            read,long
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;