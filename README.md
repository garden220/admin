1����װgit 
	��git --version �鿴�汾�� name:lyf email:243803545@qq.com  
	git init������Ŀ¼������git��
	git add �ļ���������ļ�����������
	git commit -m '��ע'(�ѻ��������ļ���ӵ����ؿ�)
	
	git remote add origin git@github.com/garden220/admin.git����github�����¿⣬���ڱ���ִ��������й�����
	ssh-keygen  -t   rsa   -C  "243803545@qq.com"(��û��ssh�ܳ׵������ȥĿ¼�������ã����ssh�������ã���ô��Ҫ��ssh-keygen�ӵ�������������ܳ׼ӵ�github�У������ڱ���Ŀ¼ִ��ssh -T git@github.com ��һ��yes���ر�cmd������Ŀ¼�ٴ��ύ)
	ssh -v git@github.com
	git push -u origin master

2����װyarn(ȫ�ְ�װ yarn --version��⣬��Ŀ¼��ִ��npm install -g yarn)

3����yarn��װwebpack(Ŀ¼�ﰲװ��yarn add webpack@3.10.0 --dev)

4��yarn add webpack-dev-server@2.9.7 -dev

5��ʹ��.\node_modules\.bin\webpack���д��

6��yarn add html-webpack-plugin@2.30.1 --dev��html��������1

7��yarn add babel-core@6.26.0 babel-preset-env@1.6.1 babel-loader@7.1.2 --dev��es6ת��es5��1

8��yarn add babel-preset-react@6.24.1 --dev������react��1

9��yarn add react react-dom����װreact��1

10��yarn add style-loader css-loader --dev����ȡ��ʽ��1

11��yarn add extract-text-webpack-plugin@3.0.2 --dev������ʽ��ȡ��һ�������ļ���1

	npm install --save-dev extract-text-webpack-plugin

12��yarn add sass-loader@6.0.6 node-sass@4.7.2 --dev����װsass-loader�������sass����ʱ�ؽ�����npm rebuild node-sass��1

13��yarn add file-loader@1.1.6 url-loader@0.6.2 --dev(��װ�ļ���ͼƬ����)1

14��yarn add webpack-dev-server@2.9.7 --dev����װdevServer��1

	npm install --save-dev webpack-dev-server

15��npm install react-router-dom

16�����ǹԹԵ���npm�ɣ���yarn����package.json��Ű汾����������

react-redux todoList�ٷ�ʵ��
https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/todos