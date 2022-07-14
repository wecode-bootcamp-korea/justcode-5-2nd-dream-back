const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMypageByUserId(userid) {
  console.log('getMypage');
  const dbMypage = await prisma.$queryRaw`

  SELECT
  u.id,
  u.email,
  u.password,
  u.phone,
  u.name,
  u.image,
  address.address

 FROM user as u
 JOIN address ON address.user_id =u.id
 WHERE u.id = ${userid}

  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}

async function postMypageByuserId(userid) {
  console.log('postMypage');
  const dbMypage = await prisma.$queryRaw`


  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}

async function putMypageByuserId(userid) {
  console.log('putMypage');
  const dbMypage = await prisma.$queryRaw`


  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}

async function deleteMypageByuserId(userid) {
  console.log('deleteMypage');
  const dbMypage = await prisma.$queryRaw`


  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}

async function getSaleMypageByuserId(userid) {
  console.log('getSaleMypage');
  const dbMypage = await prisma.$queryRaw`


  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}

async function getPurchaseMypageByuserId(userid) {
  console.log('getPurchaseMypage');
  const dbMypage = await prisma.$queryRaw`

  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}

async function DeletWishList(id, room_id) {
  const dbWishList = await prisma.$queryRaw`
  DELETE FROM wishlist WHERE user_id = ${id} and room_id = ${room_id}
 
  
  `;
  //  DELETE FROM wishlist WHERE user_id = ${id} and ${room_id}
  console.log('Delet: ', dbWishList);
  // return res.status(200).json({ message: 'CREATED' });
  return dbWishList;
}

async function InsertWishList(id, room_id) {
  console.log('getWishList', id, room_id);
  const dbWishList = await prisma.$queryRaw`
  INSERT INTO wishlist(user_id,room_id) values(${id},${room_id})
  
  `;
  console.log('test: ', dbWishList);
  // return res.status(200).json({ message: 'CREATED' });
  return dbWishList;
}

module.exports = {
  getMypageByUserId,
  postMypageByuserId,
  putMypageByuserId,
  deleteMypageByuserId,
  getSaleMypageByuserId,
  getPurchaseMypageByuserId,
};
