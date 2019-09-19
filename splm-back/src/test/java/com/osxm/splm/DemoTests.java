package com.osxm.splm;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.osxm.splm.demo.service.impl.DemoServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoTests {

	@Autowired
	private DemoServiceImpl service;
	
	@Test
	public void demo() {
		service.get("");
	}
}
