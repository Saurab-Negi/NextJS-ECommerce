import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { getSale } from "@/sanity/helpers";

export default async function Home() {

  const sales = await getSale();
  console.log('sales', sales)
  return (
    <>
    <Container className="py-20">
      <div className="">Hello World</div>
      <Button>Click Me </Button>
    </Container>
    </>
  );
}
