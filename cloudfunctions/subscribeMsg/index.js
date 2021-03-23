// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {

    const wxContext = cloud.getWXContext()

    cloud.openapi.subscribeMessage.send({
      touser: wxContext.OPENID,
      templateId: 'y226KPRmBeOXnhUfOfla59LOR1f_nTNKGE4u8GDPMWs',
      page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
      data: {
        amount1: {
          value: event.content,
        },
        thing5: {
            character_string2: '评论成功'
        }
      },
      miniprogramState: 'developer'
    })
  } catch (err) {
    console.log(err)
  }

}