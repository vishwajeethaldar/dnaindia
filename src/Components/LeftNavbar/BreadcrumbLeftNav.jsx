import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'


export const BreadcrumbLeftNav = ({current}) => {
  return (
    
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={current}>Contact</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
  )
}
