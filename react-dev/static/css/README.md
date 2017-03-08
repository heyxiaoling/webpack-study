### 样式命名
* g-    全局通用样式命名，前缀g全称为global，一旦修改将影响全站样式   g-mod
* m-  模块命名方式  m-detail
* ui- 组件命名方式  ui-selector
* js- 所有用于纯交互的命名，不涉及任何样式规则。JSer拥有全部定义权限   js-switch

### 样式书写顺序
* display, float, overflow  布局属性
* position 布局属性
* width,height,line-height 布局属性
* margin,padding 
* background,color, font, text-align 
* 后缀顺序： -webkit,　-moz, -o-
* hack规范

    -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
　　-moz-box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
　　-o-box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
　　box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);

    .test {
    　　　color: #000;       /* For all */
    　　　color: #111\9;     /* For all IE */
    　　　color: #222\0;     /* For IE8 and later, Opera without Webkit */
    　　　color: #333\9\0;   /* For IE8 and later */
    　　　color: #444\0/;    /* For IE8 and later */
    　　　*color: #666;      /* For IE7 and earlier */
    　　　_color: #777;      /* For IE6 and earlier */
    }