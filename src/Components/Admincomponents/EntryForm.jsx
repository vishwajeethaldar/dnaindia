import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { addnewNews } from '../../api/api'

export const EntryForm = ({path}) => {
  const intState = { 
        "category":"",
        "title":"",
        "subtitle":"",
        "image":"",
        "altText":"",
        "description":"",
        "tweetlink":"",
        "instalink":""
     };
  const [userState, setUserState] =  useState(intState)

  const handleEntry = (e)=>{
    const {name, value} =  e.target;
    setUserState({...userState, [name]:value});
    console.log(userState);
  }

  const handleAddNews = (userState, path)=>{
    addnewNews(userState, path).then((res)=>{
      setUserState(intState);
      console.log("done");
    })
  }


  return (
    <FormControl>
    <FormLabel> Title </FormLabel>
    <Input name="category" value={userState.category} onChange={handleEntry} type={'text'} placeholder="Title" /> 
    <FormLabel> Subtitle </FormLabel>
    <Input name="title" value={userState.title} onChange={handleEntry} type={'text'} placeholder="Subtitle" /> 
    <FormLabel> Category </FormLabel>
    <Input name="subtitle" value={userState.subtitle} onChange={handleEntry} type={'text'} placeholder="Category" /> 
    <FormLabel> Image  </FormLabel>
    <Input name="image" value={userState.image} onChange={handleEntry} type={'text'} placeholder="Image Link" />
    <FormLabel> Alternate Image Text  </FormLabel>
    <Input name="altText" value={userState.altText} onChange={handleEntry} type={'text'} placeholder="Image Alt Text" />
    <FormLabel> Insta Profile Link  </FormLabel>
    <Input name="instalink" value={userState.instalink} onChange={handleEntry} type={'text'} placeholder="Insta Profile Link" />
    <FormLabel> Twitter Profile Link  </FormLabel>
    <Input name="tweetlink" value={userState.tweetlink}  onChange={handleEntry} type={'text'} placeholder="Twitter Profile Link" />
    <FormLabel> News Description  </FormLabel>
    <Textarea name="description" value={useState.description} onChange={handleEntry} placeholder='add some description'></Textarea>
    <Button onClick={()=>handleAddNews(userState, path)} mt="25px" w="150px" colorScheme={'twitter'}>Submit </Button>
</FormControl>
  )
}
