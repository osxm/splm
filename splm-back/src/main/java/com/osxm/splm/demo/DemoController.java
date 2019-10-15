/**
 * @Title: DemoController.java
 * @Package com.osxm.splm.demo
 * @Description: TODO
 * @author oscarchen
 * @date 2019骞�9鏈�18鏃�
 * @version V1.0
 */
package com.osxm.splm.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.osxm.splm.demo.model.Demo;
import com.osxm.splm.demo.service.DemoService;

/**
 * @ClassName: DemoController
 * @Description: TODO
 * @author oscarchen
 */

@RestController
public class DemoController {

    @Autowired
    private DemoService service;

    @GetMapping("/demos/{id}")
    public Demo get(@PathVariable String id) {
        return service.get(id);
    }

    @GetMapping("/demos")
    public Map<String, Object> listAll() {
        Map<String, Object> rtnMap = new HashMap<String, Object>();
        List<Demo> list = service.listAll();
        rtnMap.put("total", list != null ? list.size() : 0);
        rtnMap.put("data", list);
        return rtnMap;
    }

    @PostMapping("/demos")
    public Demo add(@RequestBody Demo entity) {
        return service.add(entity);
    }

    @PutMapping("/demos")
    public void update(@RequestBody Demo entity) {
        service.update(entity);
    }

    @DeleteMapping("/demos/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
