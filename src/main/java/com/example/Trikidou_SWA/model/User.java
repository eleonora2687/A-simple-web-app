package com.example.Trikidou_SWA.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class User {
	@Id
	private Long id;
	private String name;
	private String surname;
	private String gender;
	private LocalDate birthdate;

	@OneToOne(cascade = CascadeType.ALL)  // Add cascade here
	@JoinColumn(name = "address_id", referencedColumnName = "id")
	private Address address;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
    
    

    
}
