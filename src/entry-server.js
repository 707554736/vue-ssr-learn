import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, store, App } = createApp()

    let components = App.components
    let asyncDataPromiseFns = []

    Object.values(components).forEach(component => {
      if (component.asyncData) {
        asyncDataPromiseFns.push(
          component.asyncData({ store })
        )
      }
    })

    // 通过导出的app拿到所有下面的components， 然后遍历，找出有asyncData方法的，有的话调用并且传入store，返回一个promise，使用promise.all等所有的异步方法都成功返回再resolve（app）
    Promise.all(asyncDataPromiseFns).then((result) => {
      // context.state = store.state作用是，当使用createBundleRenderer时，如果设置了template选项，那么会把context.state的值作为window.__INITIAL_STATE__自动插入到模板html中。

      context.state = store.state

      console.log(store.state);
      console.log(context.state);
      console.log(context);

      resolve(app)
    }, reject)
  })
}