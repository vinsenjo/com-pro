import ServiceFetch from "./service";
import resolveResponse from "contentful-resolve-response";

export default async function ServicePage() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/h0yf4mj7zbm6/environments/master/entries?access_token=ECbIaTpl7pYrdvhq7MEhQNKvWACp604CIAR3rurndxI",
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const user = await res.json();

  const response = {
    items: user.items,
    includes: user.includes,
  };

  const items = resolveResponse(response);

  return (
    <div>
      {/* {user.items.map((item: any,idx:number) => {
        return (
          <ServiceFetch
            name={item.fields.name}
            desc1={item.fields.description1}
            desc2={item.fields.description2}
            desc3={item.fields.descriptio3}
            imgSrc={user.includes.Asset[idx].fields.file.url}
          />
        );
      })} */}
      <ServiceFetch
        name={user.items[0].fields.name}
        desc1={user.items[0].fields.description1}
        desc2={user.items[0].fields.description2}
        desc3={user.items[0].fields.descriptio3}
        imgSrc={user.includes.Asset[1].fields.file.url}
      />
      <ServiceFetch
        name={user.items[1].fields.name}
        desc1={user.items[1].fields.description1}
        desc2={user.items[1].fields.description2}
        desc3={user.items[1].fields.descriptio3}
        imgSrc={user.includes.Asset[2].fields.file.url}
      />
      <ServiceFetch
        name={user.items[2].fields.name}
        desc1={user.items[2].fields.description1}
        desc2={user.items[2].fields.description2}
        desc3={user.items[2].fields.descriptio3}
        imgSrc={user.includes.Asset[0].fields.file.url}
      />
    </div>
  );
}
