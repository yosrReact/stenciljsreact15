"use client";

import { DomComponent, ShadowComponent } from "@test/react-library";
import { useEffect, useState } from "react";
import MyButton from "../components/button";

export default function Dashboard() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);

  return (<>
    {isClient && <>
      <main role="main">
          <div style={{"display": "grid"}}>
            <DomComponent heading="My first heading">
              <div slot="header">
                <div>TAG</div>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ipsam labore officia tempora, facere totam
              dolores expedita a impedit itaque, provident incidunt doloremque, id ut obcaecati ipsa excepturi aut ratione?
              <div slot="footer">
                <MyButton></MyButton>
              </div>
            </DomComponent>

            <ShadowComponent heading="My second heading" style={{["--background-color" as any]:"gray"}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ipsam labore officia tempora, facere totam
              dolores expedita a impedit itaque, provident incidunt doloremque, id ut obcaecati ipsa excepturi aut ratione?
              <div slot="footer">
                <MyButton></MyButton>
              </div>
            </ShadowComponent>
          </div>
      </main>
    </>}
  </>);
}