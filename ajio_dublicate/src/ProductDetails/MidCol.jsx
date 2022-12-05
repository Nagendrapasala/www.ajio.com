import React from "react";
import "./Cols.css";
import { Box, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function MidCol() {
  return (
    <div className="mid">
      <Box h="591px" w="473px" bgColor="red">
        <Image
          src="https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
          alt="mainimage"
          width="100%"
          height="100%"
        />
      </Box>
      <Tabs size="sm" width="450px" className="tabs" variant="enclosed">
        <TabList>
          <Tab>RETURNS</Tab>
          <Tab>OUR PROMISE</Tab>
        </TabList>
        <TabPanels>
          <TabPanel fontSize="14px">
            <p>
              Easy 10 days return and exchange. Return Policies may vary based
              on products and promotions. For full details on our Returns
              Policies, please click here․
            </p>
          </TabPanel>
          <TabPanel fontSize="14px">
            <p>We assure the authenticity and quality of our products</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
