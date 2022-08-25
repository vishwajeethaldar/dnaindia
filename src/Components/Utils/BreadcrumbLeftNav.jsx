import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



export const BreadcrumbLeftNav = ({current,curLinkName}) => {
  return (
    
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
            <Link to="/"> Home </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <Link as={Link} to={current}>{curLinkName}</Link>
        </BreadcrumbItem>
    </Breadcrumb>
  )
}

