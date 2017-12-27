package be.heh.spring1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="veterinary")
public class Veterinary implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column(name="firstName")
    private String firstName;

    @Column (name="lastName")
    private String lastName;

    protected Veterinary(){}

    public Veterinary(String firstName, String lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    public long getId(){
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName=firstName;
    }

    public String getLastName() {return lastName;}

    public void setLastName(String lastName){this.lastName=lastName;}

    @Override
    public String toString(){
        return String.format("Veterinary[id=%d, firstName='%s', lastName='%s'");
    }
}
