import RingCentral from "@rc-ex/core";

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

(async () => {
  await rc.authorize({
    jwt: process.env.RINGCENTRAL_JWT_TOKEN!,
  });
  const r = await rc.get("/restapi/v1.0/glip/groups");
  const groupId =
    (r.data as any).records.filter((g: any) => g.type === "Team")[0].id;
  const r2 = await rc.get("/restapi/v1.0/glip/groups/" + groupId);
  console.log(r2.data);
})();
