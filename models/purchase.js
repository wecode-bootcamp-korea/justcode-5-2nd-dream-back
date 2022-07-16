const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getWishListByUserId(userid) {
  console.log('getWishList');
  const dbWishList = await prisma.$queryRaw`

  SELECT
    r.id,
    r.price,
    r.address,
    r.name,
    r.description,
    p.file_url

  FROM room as r
  
  LEFT JOIN wishlist on wishlist.room_id = r.id
  JOIN(
	SELECT MAX(photo.id) AS photo_id,room_id, MAX(file_url) as file_url

	FROM photo

	GROUP BY room_id
) 	AS p ON r.id = p.room_id
  
WHERE wishlist.user_id = ${userid}

  `;
  // console.log('test: ', dbWishList);
  // return res.status(200).json({ message: 'CREATED' });
  return dbWishList;
}
// export default getUsers;

async function DeletWishList(id, room_id) {
  // console.log('getWishList', DeletWishList);
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

module.exports = { getWishListByUserId, DeletWishList, InsertWishList };
