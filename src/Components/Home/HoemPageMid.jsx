import { Box, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {getNews} from '../../api/api';
import { Business } from './Business';
import { Card } from './Card';
import { Education } from './Education';
import { Entertainment } from './Entertainment';
import { India } from './India';
import { Sports } from './Sports';
import { VideoCard } from './VideoCard';
import { World } from './World';

export const HoemPageMid = () => {
   
useEffect(()=>{
     
},[])

  return (
    <Stack>
           <Business/>
           <Education/>
           {/* <VideoCard /> */}
           <Sports/>
           <Entertainment/>
           <India/>
           <World/>
    </Stack>
  )
}
