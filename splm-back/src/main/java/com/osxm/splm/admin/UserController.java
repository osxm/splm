/**
 * @Title: UserController.java
 * @Package com.osxm.splm.admin
 * @Description: TODO
 * @author osxm:oscarxueming
 * @date 2019年10月15日 下午10:30:48
 * @version V1.0
 */

package com.osxm.splm.admin;
/**
  * @ClassName: UserController
  * @Description: TODO
  * @author osxm:oscarxueming
  */
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.osxm.splm.admin.model.User;
import com.osxm.splm.admin.service.UserService;

/**
 * @ClassName: UserController
 * @Description: TODO
 * @author oscarchen
 */

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/user/{id}")
    public User get(@PathVariable String id) {
        return service.get(id);
    }

    @GetMapping("/user")
    public Map<String, Object> listAll() {
        Map<String, Object> rtnMap = new HashMap<String, Object>();
        List<User> list = service.listAll();
        rtnMap.put("total", list != null ? list.size() : 0);
        rtnMap.put("data", list);
        return rtnMap;
    }

    @PostMapping("/user")
    public User add(@RequestBody User entity) {
        return service.add(entity);
    }

    @PutMapping("/user")
    public void update(@RequestBody User entity) {
        service.update(entity);
    }

    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}

