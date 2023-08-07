import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default async function user({ data }) {
  const router = useRouter();
  fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.user.email,
    }),
  }).then((user) => router.push(`/${user._id}`));

  return <>Loading....</>;
}
export async function getServerSideProps(context) {
  const { data } = useSession(context);
  return {
    props: {
      data,
    },
  };
}
