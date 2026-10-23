import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import TeacherCreateForm from "@/components/shadcnui/TeacherCreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teacher Create | DB Relation File",
  description: "Teacher Create Page of DB Relation File App",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>

        <TeacherCreateForm />
      </Card>
    </section>
  );
};

export default page;
