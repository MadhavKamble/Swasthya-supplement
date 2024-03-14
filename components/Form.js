import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Login from "./Login";

export default function Form() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" className="text-center">
        <Tab key="patient" title="Patient">
          <Card>
            <CardBody>
              <Login type="Patient"/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="doctor" title="Doctor">
          <Card>
            <CardBody>
            <Login type="Doctor"/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="admin" title="Administrator">
          <Card>
            <CardBody>
            <Login type="Administrator"/>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
