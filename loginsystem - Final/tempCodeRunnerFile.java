import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;
//import javax.swing.JButton;
//import javax.swing.JComboBox;
//import javax.swing.JFrame;
//import javax.swing.JLabel;
//import javax.swing.JPanel;
//import javax.swing.JTextField;

public class Main implements ActionListener{
	
	private JLabel firstName, middleName, lastName, age, gender, address, course, yearLevel;
	private JTextField  firstNameF, middleNameF, lastNameF, ageF, addressF;
	private JComboBox<String> genderBox, courseF, yearLevelF;
	private JButton registerButton, clearButton, printButton;
	
	private String firstNameGet, middleNameGet, lastNameGet, ageGet, genderGet, addressGet, courseGet, yearLevelGet;

	
	
	Main (){
		JPanel panelRight = new JPanel();
//		JPanel panelLeft = new JPanel(); 
 
		  
		JFrame frame = new JFrame();
		frame.setSize(700, 700);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//		frame.setLayout(null); 
		//frame.setResizable(false);
		frame.setVisible(true); 
		frame.add(panelRight);
		 
		panelRight.setLayout(null);	 
		
		firstName = new JLabel("First Name: ");	
		firstName.setBounds(40,40,80,25); 
		panelRight.add(firstName); 
		
		
		firstNameF = new JTextField(20);
		firstNameF.setBounds(130,40,165,25);
		panelRight.add(firstNameF);
		
		middleName = new JLabel("Middle Name: ");	
		middleName.setBounds(40,80,80,25); 
		panelRight.add(middleName); 
		
		
		middleNameF = new JTextField(20); 
		middleNameF.setBounds(130,80,165,25);
		panelRight.add(middleNameF);
		
		lastName = new JLabel("Middle Name: ");	
		lastName.setBounds(40,120,80,25); 
		panelRight.add(lastName); 
		
		
		lastNameF = new JTextField(20); 
		lastNameF.setBounds(130,120,165,25);
		panelRight.add(lastNameF);
		
		age = new JLabel("Age: ");	
		age.setBounds(40,160,165,25); 
		panelRight.add(age); 
		
		
		ageF = new JTextField(20); 
		ageF.setBounds(130,160,165,25);
		panelRight.add(ageF); 
		
		gender = new JLabel("Gender: ");	 
		gender.setBounds(340,40,80,25); 
		panelRight.add(gender); 
		
		
		genderBox = new JComboBox<>(new String[]{"Male", "Female", "Other"});
		genderBox.setBounds(430,40,165,25);
		panelRight.add(genderBox);
		
		
		address = new JLabel("Address: ");	
		address.setBounds(340,80,165,25); 
		panelRight.add(address); 
		
		 
		addressF = new JTextField(20); 
		addressF.setBounds(430,80,165,25);
		panelRight.add(addressF); 
		
		course = new JLabel("Course: ");	
		course.setBounds(340,120,165,25); 
		panelRight.add(course); 
		
		 
		courseF =  new JComboBox<>(new String[]{"BSIT", "BSCS", "BSIS"});
		courseF.setBounds(430,120,165,25);
		panelRight.add(courseF); 
		
		
		yearLevel = new JLabel("Year: ");	
		yearLevel.setBounds(340,160,165,25); 
		panelRight.add(yearLevel); 
		
		 
		yearLevelF =  new JComboBox<>(new String[]{"1st yr", "2nd yr", "3rd yr", "4th yr"});
		yearLevelF.setBounds(430,160,165,25);
		panelRight.add(yearLevelF); 
		  
		
		registerButton = new JButton("Register");
		registerButton.setBounds(190, 225, 120, 25);
		panelRight.add(registerButton);
	    registerButton.addActionListener(this);
	    panelRight.add(registerButton);
	    
	    clearButton = new JButton("Clear");
	    clearButton.setBounds(380, 225, 120, 25);
	    panelRight.add(clearButton);
	    clearButton.addActionListener(this); 
	    panelRight.add(clearButton);
	    
	    printButton = new JButton("Print");
	    printButton.setBounds(280, 300, 120, 25);
	    panelRight.add(printButton);
	    printButton.addActionListener(this);
	    panelRight.add(printButton);
	    
	    //frame.add(panelRight);
		
//		JLabel label2 = new JLabel("Password");	
//		label2.setBounds(10,100,80,25);
//		panel.add(label2);
	}
	
	 public void actionPerformed(ActionEvent e) {
	        if (e.getSource() == registerButton) { 
	            register();
	        	System.out.println("Registered");
	        } else if (e.getSource() == clearButton) { 
//	            clearForm();
	        	System.out.println("Cleared"); 
	        }else if(e.getSource() == printButton) {
	        	 print();
	        }
	    }
	  
	 
	 public void register() {
		 
		 firstNameGet = firstNameF.getText();
		 middleNameGet = middleNameF.getText();
		 lastNameGet = lastNameF.getText();
		 ageGet = ageF.getText(); 
		 genderGet = (String) genderBox.getSelectedItem();
		 addressGet = addressF.getText();
		 courseGet = (String) courseF.getSelectedItem();
		 yearLevelGet = (String) yearLevelF.getSelectedItem();
		 
//		 if (firstNameGet.isEmpty() || lastName.isEmpty() || age.isEmpty() ||
//	                email.isEmpty() || username.isEmpty() || password.isEmpty() ||
//	                confirmPassword.isEmpty()) {
//	            statusLabel.setText("Please fill in all the fields");
//	            return;
//	        }
	      
	 }
	 
	 
	 public void print(){//for testing only
		 System.out.println(firstNameGet);
	     
	 }

	
	
	
	public static void main(String[] args) {
		new Main();
		
		
	}

}
