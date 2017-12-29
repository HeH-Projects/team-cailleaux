package be.heh.spring1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="animal")
public class Animal implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column(name="numowner")
    private int numOwner;

    @Column(name="numvet")
    private int numVet;

    @Column(name="name")
    private String name;

    @Column(name="sex")
    private String sex;

    @Column(name="species")
    private String species;

    @Column(name="birthdate")
    private String birthDate;


    protected Animal(){}

    public Animal(int numOwner, int numVet, String name, String sex, String species, String birthDate){
        this.numOwner=numOwner;
        this.numVet=numVet;
        this.name=name;
        this.sex=sex;
        this.species=species;
        this.birthDate=birthDate;
    }

    public long getId(){
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getNumOwner(){return numOwner;}
    public void setNumOwner(int numOwner){this.numOwner=numOwner;}

    public int getNumVet(){return numVet;}
    public void setNumVet(int numVet){this.numVet=numVet;}

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getSex(){ return sex; }

    public void setSex(String sex){
        this.sex=sex;
    }

    public String getSpecies(){
        return species;
    }

    public void setSpecies(String species){
        this.species=species;
    }

    public String getBirthDate(){
        return birthDate;
    }

    public void setBirthDate(String birthDate){
        this.birthDate=birthDate;
    }

    @Override
    public String toString(){
        return String.format("Animal[id=%d, numOwner=%d, numVet=%d, name='%s', sex='%c', species='%s', birthDate='%s'");
    }
}
