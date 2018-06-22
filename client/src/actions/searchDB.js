import { XmlMethodCall } from 'xmlmc'
const xmlmc = new XmlMethodCall('http://localhost');

//TODO: make xmlc global,  login/logout in auth, 

export async function getCustomerData(searchValue) {
  await xmlmc.session.analystLogon('admin', btoa('admin'));
  //const getData = await xmlmc.helpdesk.getCustomerData('search', {updateMessage: 'TEST'});
  //console.log(getData);

  try {
    const query = await xmlmc.data.sqlQuery(
      "swdata",
      `select fullname, keysearch, companyname, costcenter, site from userdb where firstname like '%${searchValue}%' or surname like '%${searchValue}%' limit 5`
    );
    return query;
  } catch(e) {
    await xmlmc.session.analystLogoff();
    console.log(e);
  }
  await xmlmc.session.analystLogoff();
}

export default getCustomerData;
