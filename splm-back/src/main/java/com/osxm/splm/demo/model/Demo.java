/**
 * @Title: Demo.java
 * @Package com.osxm.splm.demo.model
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ19ÈÕ
 * @version V1.0
 */
package com.osxm.splm.demo.model;

import javax.persistence.Entity;

import com.osxm.splm.base.model.SplmRoot;

/**
  * @ClassName: Demo
  * @Description: TODO
  * @author oscarchen
  */
@Entity
public class Demo extends SplmRoot {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
