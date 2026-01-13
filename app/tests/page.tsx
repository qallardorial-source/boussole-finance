import { getAllTests } from "@/lib/mdx";
import TestsClient from "@/components/TestsClient";

export default function TestsPage() {
  const allTests = getAllTests();

  return <TestsClient allTests={allTests} />;
}
