package be.heh.spring1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="appointment")
public class Appointment implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column(name="numRoom")
    private int numRoom;

    @Column(name="numVet")
    private int numVet;

    @Column(name="numAnimal")
    private int numAnimal;

    @Column(name="date")
    private Timestamp date;


    protected Appointment(){}

    public Appointment(int numRoom, int numVet, int numAnimal, Timestamp date){
        this.numRoom=numRoom();
        this.numVet=numVet();
        this.numAnimal=numAnimal();
        this.date=date();
    }

    public long getId(){
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getNumRoom(){return numRoom;}
    public void setNumRoom(int numRoom){this.numRoom=numRoom;}

    public int getNumVet(){return numVet;}
    public void setNumVet(int numVet){this.numVet=numVet;}

    public int getNumAnimal(){return numAnimal;}
    public void setNumAnimal(int numAnimal){this.numAnimal=numAnimal;}

    public Timestamp date(){
        return date;
    }

    public void setDate(Timestamp date){
        this.date=date;
    }

    @Override
    public String toString(){
        return String.format("Appointment[id=%d, numRoom=%d, numVet=%d, numAnimal=%d, date='%s'");
    }
}
