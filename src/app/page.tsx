import { Card, CardBody } from "@nextui-org/card";

export default function Home() {
  return (
    <Card className="mx-auto mt-8 max-w-lg">
      <CardBody className="text-center">
        <h2 className="text-5xl">Welcome to Next.js Starter</h2>
        <p className="text-2xl">A simple Starter for Next.js</p>
      </CardBody>
    </Card>
  );
}
