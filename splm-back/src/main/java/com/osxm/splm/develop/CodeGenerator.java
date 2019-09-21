/**
 * @Title: CodeGenerator.java
 * @Package com.osxm.splm.develop
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ20ÈÕ
 * @version V1.0
 */
package com.osxm.splm.develop;

/**
  * @ClassName: CodeGenerator
  * @Description: TODO
  * @author oscarchen
  */
public class CodeGenerator {
    public void generateModelClassCode(String moduleName,String className,String classDisName,boolean force) {
    	String classRootPath = this.getClass().getResource("/").getPath();
    	System.out.println(classRootPath);
    }
    /**
      * @Title: main
      * @Description: TODO
      * @param args
      */

    public static void main(String[] args) {
        // TODO Auto-generated method stub
    	CodeGenerator generator = new CodeGenerator();
    	generator.generateModelClassCode("admin", "Usr", "User", false);
    }
}
