1、安装git 
	（git --version 查看版本） name:lyf email:243803545@qq.com  
	git init（本地目录配置上git）
	git add 文件名（添加文件到缓存区）
	git commit -m '备注'(把缓存区的文件添加到本地库)
	
	git remote add origin git@github.com/garden220/admin.git（在github创建新库，并在本地执行命令进行关联）
	ssh-keygen  -t   rsa   -C  "243803545@qq.com"(密码：abcd888，在没有ssh密匙的情况下去目录底下配置，如果ssh不能配置，那么需要把ssh-keygen加到环境变量里，把密匙加到github中，并且在本地目录执行ssh -T git@github.com 下一步yes，关闭cmd，进入目录再次提交)
	ssh -v git@github.com
	git push -u origin master

2、安装yarn(全局安装 yarn --version检测，在目录里执行npm install -g yarn)

3、用yarn安装webpack(目录里安装：yarn add webpack@3.10.0 --dev)

4、yarn add webpack-dev-server@2.9.7 -dev

5、使用.\node_modules\.bin\webpack进行打包

6、yarn add html-webpack-plugin@2.30.1 --dev（html加载器）

7、yarn add babel-core@6.26.0 babel-preset-env@1.6.1 babel-loader@7.1.2 --dev（es6转换es5）

8、yarn add babel-preset-react@6.24.1 --dev（依赖react）

9、yarn add react react-dom（安装react）

10、yarn add style-loader css-loader --dev（提取样式）

11、yarn add extract-text-webpack-plugin@3.0.2 --dev（把样式提取到一个单独文件）

12、yarn add sass-loader@6.0.6 node-sass@4.7.2 --dev（安装sass-loader）（打包sass出错时重建命令npm rebuild node-sass）

13、yarn add file-loader@1.1.6 url-loader@0.6.2 --dev(安装文件、图片配置)
