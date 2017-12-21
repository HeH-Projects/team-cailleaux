package be.heh.spring1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="animal")
public class Animal implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long numAnimal;

    @Column(name="numOwner")
    private long numOwner;

    @Column(name="numVet")
    private long numVet;

    @Column(name="name")
    private String name;

    @Column(name="sex")
    private char sex;

    @Column(name="species")
    private String species;

    @Column(name="birthDate")
    private Timestamp birthDate;


    protected Animal(){}

    public Animal(long numOwner, long numVet, String name, char sex, String species, Timestamp birthDate){
        this.numOwner=numOwner();
        this.numVet=numVet();
        this.name=name();
        this.sex=sex();
        this.species=species();
        this.birthDate=birthDate();
    }

    public long getId(){
        return numAnimal;
    }

    public void setId(long numAnimal) {
        this.numAnimal = numAnimal;
    }

    public long getNumOwner(){return numOwner;}
    public void setNumOwner(long numOwner){this.numOwner=numOwner;}

    public long getNumVet(){return numVet;}
    public void setNumVet(long numVet){this.numVet=numVet;}

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public char sex(){ return sex; }

    public void setSex(char sex){
        this.sex=sex;
    }

    public String getSpecies(){
        return species;
    }

    public void setSpecies(String species){
        this.species=species;
    }

    public Timestamp birthDate(){
        return birthDate;
    }

    public void setBirthDate(Timestamp birthDate){
        this.birthDate=birthDate;
    }

    @Override
    public String toString(){
        return String.format("Animal[numAnimal=%d, numOwner='%d', numVet='%d', name='%s', sex='%c', species='%s', birthDate='%s'");
    }
}
