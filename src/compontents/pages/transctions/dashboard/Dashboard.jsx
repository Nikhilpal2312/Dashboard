import React from 'react';
import DashboardLayout from '../../../DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import PriceSection from './components/PriceSection';
import { Grid, GridItem } from '@chakra-ui/react';
import Transctions from './components/Transctions';
import CardInfo from './components/CardInfo';

const Dashboard = ({}) => {


  return (
    <DashboardLayout title="Dashboard">

      <Grid gridTemplate={{
        base:'repeat(1, 1fr)',
        lg:"repeat(2, 1fr)"
      }}
      gap='6'
      >
        <GridItem colSpan={{
          base:1,
          lg:2,
        }}>
        <PortfolioSection/>
        </GridItem>

        <GridItem colSpan={1}>
        <PriceSection/>
        </GridItem>

        <GridItem colSpan={1}>
        <Transctions/>
        </GridItem>

        <GridItem colSpan={1}>
        <CardInfo 
        imgUrl="/dots.svg"
        text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
        tagText="Loans"
        inverted={false}
        />
        </GridItem>


        <GridItem colSpan={1}>
        <CardInfo 
        imgUrl="/Visual.svg"
        text="Learn more about our real estate, mortgage, and  corporate account services"
        tagText="Contact"
        inverted={true}
        />
        </GridItem>


      </Grid>
      
      
     
    </DashboardLayout>
  )
}

export default Dashboard;
