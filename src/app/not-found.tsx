import { Card, CardBody } from "@nextui-org/card";
import { IconError404 } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto h-[150px] max-w-lg p-6">
        <CardBody className="flex items-center text-center">
          <IconError404 />
          <p className="text-2xl">This page can not be found!</p>
        </CardBody>
      </Card>
    </div>
  );
}
